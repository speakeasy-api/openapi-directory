import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostWorkspaceSlugMembersMemberSlugNotesSecurity extends SpeakeasyBase {
    bearer: string;
}
export declare class PostWorkspaceSlugMembersMemberSlugNotesRequest extends SpeakeasyBase {
    memberSlug: string;
    note?: shared.Note;
    workspaceSlug: string;
}
export declare class PostWorkspaceSlugMembersMemberSlugNotesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
