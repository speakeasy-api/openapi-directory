import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditContactPathParams extends SpeakeasyBase {
    contactId: string;
    groupId: string;
    version: string;
}
export declare class EditContactRequest extends SpeakeasyBase {
    pathParams: EditContactPathParams;
    request: shared.ContactEditRequest;
}
export declare class EditContactResponse extends SpeakeasyBase {
    contactResult?: shared.ContactResult;
    contentType: string;
    statusCode: number;
}
