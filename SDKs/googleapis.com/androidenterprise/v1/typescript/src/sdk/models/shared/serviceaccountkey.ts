/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The file format of the generated key data.
 */
export enum ServiceAccountKeyTypeEnum {
  GoogleCredentials = "googleCredentials",
  Pkcs12 = "pkcs12",
}

/**
 * Credentials that can be used to authenticate as a service account.
 */
export class ServiceAccountKey extends SpeakeasyBase {
  /**
   * The body of the private key credentials file, in string format. This is only populated when the ServiceAccountKey is created, and is not stored by Google.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  data?: string;

  /**
   * An opaque, unique identifier for this ServiceAccountKey. Assigned by the server.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * Public key data for the credentials file. This is an X.509 cert. If you are using the googleCredentials key type, this is identical to the cert that can be retrieved by using the X.509 cert url inside of the credentials file.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "publicData" })
  publicData?: string;

  /**
   * The file format of the generated key data.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: ServiceAccountKeyTypeEnum;
}
