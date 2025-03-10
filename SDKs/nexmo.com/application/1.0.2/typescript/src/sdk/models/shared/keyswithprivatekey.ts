/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The Nexmo product that you access with this application.
 */
export class KeysWithPrivateKey extends SpeakeasyBase {
  /**
   * The private key you use to generate the JSON Web Token (JWT) that authenticates your requests to Messages API.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "private_key" })
  privateKey?: string;

  /**
   * The public key used to validate the [JWT](https://en.wikipedia.org/wiki/JSON_Web_Token).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "public_key" })
  publicKey?: string;
}
