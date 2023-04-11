import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContactListRequest extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetContactListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    /**
     * Successful retrieval
     */
    contactsListVO?: shared.ContactsListVO;
    contentType: string;
    /**
     * There are not any result matching your search condition
     */
    httpStatusVO?: shared.HTTPStatusVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
