/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Errors } from "./errors";
import { GmbAccounts } from "./gmbaccounts";
import { LiaSettings } from "./liasettings";
import { PosDataProviders } from "./posdataproviders";
import { Expose, Type } from "class-transformer";

export class LiasettingsCustomBatchResponseEntry extends SpeakeasyBase {
  /**
   * The ID of the request entry to which this entry responds.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "batchId" })
  batchId?: number;

  /**
   * A list of errors returned by a failed batch entry.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "errors" })
  @Type(() => Errors)
  errors?: Errors;

  @SpeakeasyMetadata()
  @Expose({ name: "gmbAccounts" })
  @Type(() => GmbAccounts)
  gmbAccounts?: GmbAccounts;

  /**
   * Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsCustomBatchResponseEntry`"
   */
  @SpeakeasyMetadata()
  @Expose({ name: "kind" })
  kind?: string;

  /**
   * Local Inventory ads (LIA) settings. All methods except listposdataproviders require the admin role.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "liaSettings" })
  @Type(() => LiaSettings)
  liaSettings?: LiaSettings;

  /**
   * The list of POS data providers.
   */
  @SpeakeasyMetadata({ elemType: PosDataProviders })
  @Expose({ name: "posDataProviders" })
  @Type(() => PosDataProviders)
  posDataProviders?: PosDataProviders[];
}
