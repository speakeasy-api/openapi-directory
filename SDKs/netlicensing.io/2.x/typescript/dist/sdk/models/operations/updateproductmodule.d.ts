import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateProductModuleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare enum UpdateProductModuleRequestBodyLicenseTemplateEnum {
    Timevolume = "TIMEVOLUME",
    Feature = "FEATURE"
}
export declare enum UpdateProductModuleRequestBodyNodeSecretModeEnum {
    Predefined = "PREDEFINED",
    Client = "CLIENT"
}
export declare class UpdateProductModuleRequestBody extends SpeakeasyBase {
    /**
     * If set to 'false', the Product Module is disabled. Licensees can not obtain any new Licenses for this Product Module.
     */
    active?: boolean;
    /**
     * License Template. Mandatory for 'Try &amp; Buy' licensing model.
     */
    licenseTemplate?: UpdateProductModuleRequestBodyLicenseTemplateEnum[];
    /**
     * Licensing model applied to this Product Module. Defines what License Templates can be configured for the Product Module and how Licenses for this Product Module are processed during validation.
     */
    licensingModel?: string;
    /**
     * Maximum checkout validity (days). Mandatory for 'Floating' licensing model.
     */
    maxCheckoutValidity?: number;
    /**
     * Product Module name that is visible to the end customers in NetLicensing Shop.
     */
    name?: string;
    /**
     * Secret Mode. Mandatory for 'Node-Locked' licensing model.
     */
    nodeSecretMode?: UpdateProductModuleRequestBodyNodeSecretModeEnum[];
    /**
     * New Product Module number (update).
     */
    number?: string;
    /**
     * Remaining time volume for red level. Mandatory for 'Rental' licensing model.
     */
    redThreshold?: number;
    /**
     * Remaining time volume for yellow level. Mandatory for 'Rental' licensing model.
     */
    yellowThreshold?: number;
}
export declare class UpdateProductModuleRequest extends SpeakeasyBase {
    requestBody?: UpdateProductModuleRequestBody;
    /**
     * Unique number (across all Products of a Vendor) that identifies the Product Module. Vendor can assign this number when creating a Product Module or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product.
     */
    productModuleNumber: string;
}
export declare class UpdateProductModuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful request
     */
    netlicensing?: shared.Netlicensing;
}
