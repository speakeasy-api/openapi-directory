import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ValidateLicenseeSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * 'Floating' licensing model: check-out or check-in session action, to allocate or return it from/to the pool of available sessions
 */
export declare enum ValidateLicenseeRequestBodyActionEnum {
    CheckOut = "checkOut",
    CheckIn = "checkIn"
}
export declare class ValidateLicenseeRequestBody extends SpeakeasyBase {
    /**
     * 'Floating' licensing model: check-out or check-in session action, to allocate or return it from/to the pool of available sessions
     */
    action?: ValidateLicenseeRequestBodyActionEnum;
    /**
     * Human-readable name for the auto-created Licensee (will be set as custom Licensee property)
     */
    licenseeName?: string;
    /**
     * 'Node-Locked' licensing model: specifies unique secret
     */
    nodeSecret?: string;
    /**
     * 'Node-Locked' licensing model: product module number
     */
    productModuleNumber?: string;
    /**
     * Product number, must be provided when 'Licensee auto-create' is enabled (see also Product JavaDoc). Identifies the Product to which new Licensee should be added
     */
    productNumber?: string;
    /**
     * 'Floating' licensing model: specifies unique session identifier
     */
    sessionId?: string;
}
export declare class ValidateLicenseeRequest extends SpeakeasyBase {
    requestBody?: ValidateLicenseeRequestBody;
    /**
     * Licensee number with a maximum length of 1000 characters
     */
    licenseeNumber: string;
}
export declare class ValidateLicenseeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful request
     */
    netlicensing?: shared.Netlicensing;
}
