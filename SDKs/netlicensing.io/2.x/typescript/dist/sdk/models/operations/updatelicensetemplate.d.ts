import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateLicenseTemplateSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateLicenseTemplateRequestBody extends SpeakeasyBase {
    /**
     * If set to 'false', the License Template is disabled. Licensee can not obtain any new Licenses off this License Template.
     */
    active?: boolean;
    /**
     * If set to 'true', every new Licensee automatically gets one License out of this License Template on creation. Automatic Licenses must have their price set to 0.
     */
    automatic?: boolean;
    /**
     * Specifies currency for the License price. Check data types to discover which currencies are supported.
     */
    currency?: string;
    /**
     * If set to 'true', this License Template is not shown in NetLicensing Shop as offered for purchase.
     */
    hidden?: boolean;
    /**
     * If set to 'true', Licenses from this License Template are not visible to the end customer, but participate in validation.
     */
    hideLicenses?: boolean;
    /**
     * Type of Licenses created from this License Template. Supported types: FEATURE, TIMEVOLUME, FLOATING, QUANTITY
     */
    licenseType?: string;
    /**
     * Mandatory for 'FLOATING' License Type.
     */
    maxSessions?: string;
    /**
     * Name for the Licensed item
     */
    name?: string;
    /**
     * New License Template number (update).
     */
    number?: string;
    /**
     * Price for the License. If >0, it must always be accompanied by the currency specification.
     */
    price?: number;
    /**
     * Mandatory for 'Pay-per-Use' and 'Node-Locked' License Model.
     */
    quantity?: string;
    /**
     * Mandatory for 'Quota' License Model.
     */
    quota?: string;
    /**
     * Mandatory for 'TIMEVOLUME' License Type.
     */
    timeVolume?: string;
    /**
     * For 'TIMEVOLUME' License Type.
     */
    timeVolumePeriod?: string;
}
export declare class UpdateLicenseTemplateRequest extends SpeakeasyBase {
    requestBody?: UpdateLicenseTemplateRequestBody;
    /**
     * Unique number (across all Products of a Vendor) that identifies the License Template. Vendor can assign this number when creating a License Template or let NetLicensing generate one. Read-only after creation of the first License from this License Template.
     */
    licenseTemplateNumber: string;
}
export declare class UpdateLicenseTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful request
     */
    netlicensing?: shared.Netlicensing;
}
