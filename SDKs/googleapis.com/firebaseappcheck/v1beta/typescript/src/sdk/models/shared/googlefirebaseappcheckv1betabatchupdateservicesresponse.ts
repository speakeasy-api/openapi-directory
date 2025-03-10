/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1betaService } from "./googlefirebaseappcheckv1betaservice";
import { Expose, Type } from "class-transformer";

/**
 * Response message for the BatchUpdateServices method.
 */
export class GoogleFirebaseAppcheckV1betaBatchUpdateServicesResponse extends SpeakeasyBase {
  /**
   * Service objects after the updates have been applied.
   */
  @SpeakeasyMetadata({ elemType: GoogleFirebaseAppcheckV1betaService })
  @Expose({ name: "services" })
  @Type(() => GoogleFirebaseAppcheckV1betaService)
  services?: GoogleFirebaseAppcheckV1betaService[];
}
