/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CareContextRepresentation } from "./carecontextrepresentation";
import { ErrorT } from "./error";
import { RequestReference } from "./requestreference";
import { Expose, Transform, Type } from "class-transformer";

export class PatientLinkResultPatient extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CareContextRepresentation })
  @Expose({ name: "careContexts" })
  @Type(() => CareContextRepresentation)
  careContexts: CareContextRepresentation[];

  @SpeakeasyMetadata()
  @Expose({ name: "display" })
  display: string;

  @SpeakeasyMetadata()
  @Expose({ name: "referenceNumber" })
  referenceNumber: string;
}

export class PatientLinkResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  @Type(() => ErrorT)
  error?: ErrorT;

  @SpeakeasyMetadata()
  @Expose({ name: "patient" })
  @Type(() => PatientLinkResultPatient)
  patient?: PatientLinkResultPatient;

  /**
   * a nonce, unique for each HTTP request
   */
  @SpeakeasyMetadata()
  @Expose({ name: "requestId" })
  requestId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "resp" })
  @Type(() => RequestReference)
  resp: RequestReference;

  /**
   * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
   */
  @SpeakeasyMetadata()
  @Expose({ name: "timestamp" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  timestamp: Date;
}
