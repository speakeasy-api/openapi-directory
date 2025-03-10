/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Secret } from "./secret";
import { Expose, Type } from "class-transformer";

/**
 * Configuration information for a Kerberos principal.
 */
export class KerberosConfig extends SpeakeasyBase {
  /**
   * A securely stored value.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "keytab" })
  @Type(() => Secret)
  keytab?: Secret;

  /**
   * A Cloud Storage URI that specifies the path to a krb5.conf file. It is of the form gs://{bucket_name}/path/to/krb5.conf, although the file does not need to be named krb5.conf explicitly.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "krb5ConfigGcsUri" })
  krb5ConfigGcsUri?: string;

  /**
   * A Kerberos principal that exists in the both the keytab the KDC to authenticate as. A typical principal is of the form primary/instance@REALM, but there is no exact format.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "principal" })
  principal?: string;
}
