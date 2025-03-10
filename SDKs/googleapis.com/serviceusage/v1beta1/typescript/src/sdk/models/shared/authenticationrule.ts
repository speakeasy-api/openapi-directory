/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AuthRequirement } from "./authrequirement";
import { OAuthRequirements } from "./oauthrequirements";
import { Expose, Type } from "class-transformer";

/**
 * Authentication rules for the service. By default, if a method has any authentication requirements, every request must include a valid credential matching one of the requirements. It's an error to include more than one kind of credential in a single request. If a method doesn't have any auth requirements, request credentials will be ignored.
 */
export class AuthenticationRule extends SpeakeasyBase {
  /**
   * If true, the service accepts API keys without any other credential. This flag only applies to HTTP and gRPC requests.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "allowWithoutCredential" })
  allowWithoutCredential?: boolean;

  /**
   * OAuth scopes are a way to define data and permissions on data. For example, there are scopes defined for "Read-only access to Google Calendar" and "Access to Cloud Platform". Users can consent to a scope for an application, giving it permission to access that data on their behalf. OAuth scope specifications should be fairly coarse grained; a user will need to see and understand the text description of what your scope means. In most cases: use one or at most two OAuth scopes for an entire family of products. If your product has multiple APIs, you should probably be sharing the OAuth scope across all of those APIs. When you need finer grained OAuth consent screens: talk with your product management about how developers will use them in practice. Please note that even though each of the canonical scopes is enough for a request to be accepted and passed to the backend, a request can still fail due to the backend requiring additional scopes or permissions.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "oauth" })
  @Type(() => OAuthRequirements)
  oauth?: OAuthRequirements;

  /**
   * Requirements for additional authentication providers.
   */
  @SpeakeasyMetadata({ elemType: AuthRequirement })
  @Expose({ name: "requirements" })
  @Type(() => AuthRequirement)
  requirements?: AuthRequirement[];

  /**
   * Selects the methods to which this rule applies. Refer to selector for syntax details.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "selector" })
  selector?: string;
}
