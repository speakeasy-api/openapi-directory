import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInvitationVendorsRequest extends SpeakeasyBase {
    request?: shared.FileNeedsVendor[];
}
export declare class GetInvitationVendorsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    vendorInvitationList?: shared.VendorInvitationList;
}
