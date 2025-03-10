/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { MutualTls } from "./mutualtls";
import { Expose, Type } from "class-transformer";

/**
 * [Deprecated] Configuration for the peer authentication method. Configuration for the peer authentication method.
 */
export class PeerAuthenticationMethod extends SpeakeasyBase {
  /**
   * [Deprecated] Configuration for the mutual Tls mode for peer authentication. Configuration for the mutual Tls mode for peer authentication.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "mtls" })
  @Type(() => MutualTls)
  mtls?: MutualTls;
}
