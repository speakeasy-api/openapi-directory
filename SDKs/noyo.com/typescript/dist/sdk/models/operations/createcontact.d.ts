import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateContactPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class CreateContactRequest extends SpeakeasyBase {
    pathParams: CreateContactPathParams;
    request: shared.ContactCreateRequest;
}
export declare class CreateContactResponse extends SpeakeasyBase {
    contactResult?: shared.ContactResult;
    contentType: string;
    statusCode: number;
}
