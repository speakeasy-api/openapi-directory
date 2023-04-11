import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteWorkspaceSlugMembersMemberSlugIdentitiesSecurity extends SpeakeasyBase {
    bearer: string;
}
export declare class DeleteWorkspaceSlugMembersMemberSlugIdentitiesRequest extends SpeakeasyBase {
    identity?: shared.Identity;
    memberSlug: string;
    workspaceSlug: string;
}
export declare class DeleteWorkspaceSlugMembersMemberSlugIdentitiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
