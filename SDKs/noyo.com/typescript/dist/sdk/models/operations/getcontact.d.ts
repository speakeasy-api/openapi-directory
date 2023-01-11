import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetContactPathParams extends SpeakeasyBase {
    contactId: string;
    groupId: string;
}
export declare class GetContactRequest extends SpeakeasyBase {
    pathParams: GetContactPathParams;
}
export declare class GetContactResponse extends SpeakeasyBase {
    contactResult?: shared.ContactResult;
    contentType: string;
    statusCode: number;
}
