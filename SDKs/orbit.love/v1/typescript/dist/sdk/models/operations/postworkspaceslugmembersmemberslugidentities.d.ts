import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostWorkspaceSlugMembersMemberSlugIdentitiesSecurity extends SpeakeasyBase {
    bearer: string;
}
export declare class PostWorkspaceSlugMembersMemberSlugIdentitiesRequest extends SpeakeasyBase {
    identity?: shared.Identity;
    memberSlug: string;
    workspaceSlug: string;
}
export declare class PostWorkspaceSlugMembersMemberSlugIdentitiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
