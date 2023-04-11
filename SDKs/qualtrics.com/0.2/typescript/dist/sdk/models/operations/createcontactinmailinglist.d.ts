import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateContactInMailinglistRequest extends SpeakeasyBase {
    /**
     * Contact data
     */
    createContactInMailingList: shared.CreateContactInMailingList;
    /**
     * ID of the qualtrics directory to create the contact to
     */
    directoryId: string;
    /**
     * ID of the mailing list
     */
    mailingListId: string;
}
export declare class CreateContactInMailinglistResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
