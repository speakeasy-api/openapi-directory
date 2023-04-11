import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateLicenseSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateLicenseRequestBody extends SpeakeasyBase {
    active?: boolean;
    /**
     * Specifies currency for the License price. Check data types to discover which currencies are supported. Read-only, set from License Template on creation
     */
    currency?: string;
    /**
     * If set to 'true', this License is not shown in NetLicensing Shop as purchased License. Set from License Template on creation, if not specified explicitly
     */
    hidden?: boolean;
    /**
     * Name for the Licensed item. Set from License Template on creation, if not specified explicitly.
     */
    name?: string;
    /**
     * Unique number (across all Products/Licensees of a Vendor) that identifies the License. Vendor can assign this number when creating a License or let NetLicensing generate one. Read-only after corresponding creation Transaction status is set to closed.
     */
    number?: string;
    parentfeature?: string;
    /**
     * Price for the License. If > 0, it must always be accompanied by the currency specification. Read-only, set from License Template on creation
     */
    price?: number;
    /**
     * Mandatory for 'Pay-per-Use' License Model.
     */
    quantity?: string;
    /**
     * For 'TIMEVOLUME' License type
     */
    startDate?: Date;
    /**
     * Mandatory for 'TIMEVOLUME' License Type.
     */
    timeVolume?: string;
    /**
     * For 'TIMEVOLUME' License Type.
     */
    timeVolumePeriod?: string;
    /**
     * Mandatory for 'Pay-per-Use' License Model.
     */
    usedQuantity?: string;
}
export declare class UpdateLicenseRequest extends SpeakeasyBase {
    requestBody?: UpdateLicenseRequestBody;
    /**
     * Unique number (across all Products/Licensees of a Vendor) that identifies the License. Vendor can assign this number when creating a License or let NetLicensing generate one. Read-only after corresponding creation Transaction status is set to closed.
     */
    licenseNumber: string;
}
export declare class UpdateLicenseResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful request
     */
    netlicensing?: shared.Netlicensing;
}
