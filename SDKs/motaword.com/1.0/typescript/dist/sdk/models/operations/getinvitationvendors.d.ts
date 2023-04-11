import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetInvitationVendorsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * FileTooLarge FileTooSmall NoFileUploaded
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invitation need grouped by vendor
     */
    vendorInvitationList?: shared.VendorInvitationList;
}
