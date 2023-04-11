import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutWorkspaceSlugMembersMemberSlugNotesIdSecurity extends SpeakeasyBase {
    bearer: string;
}
export declare class PutWorkspaceSlugMembersMemberSlugNotesIdRequest extends SpeakeasyBase {
    id: string;
    memberSlug: string;
    note?: shared.Note;
    workspaceSlug: string;
}
export declare class PutWorkspaceSlugMembersMemberSlugNotesIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
