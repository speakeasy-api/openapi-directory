import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetWorkspaceSlugMembersMemberSlugNotesSecurity extends SpeakeasyBase {
    bearer: string;
}
export declare class GetWorkspaceSlugMembersMemberSlugNotesRequest extends SpeakeasyBase {
    memberSlug: string;
    page?: string;
    workspaceSlug: string;
}
export declare class GetWorkspaceSlugMembersMemberSlugNotesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
