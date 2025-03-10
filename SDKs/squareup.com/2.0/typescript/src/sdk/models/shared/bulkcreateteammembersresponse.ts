/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
  objectToClass,
  SpeakeasyBase,
  SpeakeasyMetadata,
} from "../../../internal/utils";
import { CreateTeamMemberResponse } from "./createteammemberresponse";
import { ErrorT } from "./error";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Represents a response from a bulk create request containing the created `TeamMember` objects or error messages.
 */
export class BulkCreateTeamMembersResponse extends SpeakeasyBase {
  /**
   * The errors that occurred during the request.
   */
  @SpeakeasyMetadata({ elemType: ErrorT })
  @Expose({ name: "errors" })
  @Type(() => ErrorT)
  errors?: ErrorT[];

  /**
   * The successfully created `TeamMember` objects. Each key is the `idempotency_key` that maps to the `CreateTeamMemberRequest`.
   */
  @SpeakeasyMetadata({ elemType: CreateTeamMemberResponse })
  @Expose({ name: "team_members" })
  @Transform(
    ({ value }) => {
      const obj: Record<string, CreateTeamMemberResponse> = {};
      for (const key in value) {
        obj[key] = objectToClass(value[key], CreateTeamMemberResponse);
      }
      return obj;
    },
    { toClassOnly: true }
  )
  teamMembers?: Record<string, CreateTeamMemberResponse>;
}
