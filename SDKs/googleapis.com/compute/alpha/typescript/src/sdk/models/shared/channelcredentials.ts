/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TlsCertificatePaths } from "./tlscertificatepaths";
import { Expose, Type } from "class-transformer";

/**
 * The channel credentials to access the SDS server. This field can be set to one of the following: CERTIFICATES: Use TLS certificates to access the SDS server. GCE_VM: Use local GCE VM credentials to access the SDS server.
 */
export enum ChannelCredentialsChannelCredentialTypeEnum {
  Certificates = "CERTIFICATES",
  GceVm = "GCE_VM",
  Invalid = "INVALID",
}

/**
 * [Deprecated] gRPC channel credentials to access the SDS server. gRPC channel credentials to access the SDS server.
 */
export class ChannelCredentials extends SpeakeasyBase {
  /**
   * [Deprecated] The paths to the mounted TLS Certificates and private key. The paths to the mounted TLS Certificates and private key.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "certificates" })
  @Type(() => TlsCertificatePaths)
  certificates?: TlsCertificatePaths;

  /**
   * The channel credentials to access the SDS server. This field can be set to one of the following: CERTIFICATES: Use TLS certificates to access the SDS server. GCE_VM: Use local GCE VM credentials to access the SDS server.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "channelCredentialType" })
  channelCredentialType?: ChannelCredentialsChannelCredentialTypeEnum;
}
