import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateLicenseSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateLicenseRequestBody extends SpeakeasyBase {
    active: boolean;
    /**
     * Specifies currency for the License price. Check data types to discover which currencies are supported. Read-only, set from License Template on creation
     */
    currency?: string;
    /**
     * If set to 'true', this License is not shown in NetLicensing Shop as purchased License. Set from License Template on creation, if not specified explicitly
     */
    hidden?: boolean;
    licenseTemplateNumber: string;
    licenseeNumber: string;
    /**
     * Name for the Licensed item. Set from License Template on creation, if not specified explicitly.
     */
    name?: string;
    number?: string;
    /**
     * Mandatory for 'TIMEVOLUME' License Type and 'RENTAL' licensing model
     */
    parentfeature?: string;
    /**
     * Price for the License. If >0, it must always be accompanied by the currency specification. Read-only, set from License Template on creation
     */
    price?: number;
    /**
     * Mandatory for 'Pay-per-Use' License Model.
     */
    quantity?: string;
    /**
     * Mandatory for 'TIMEVOLUME' License Type.
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
export declare class CreateLicenseResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful request
     */
    netlicensing?: shared.Netlicensing;
}
