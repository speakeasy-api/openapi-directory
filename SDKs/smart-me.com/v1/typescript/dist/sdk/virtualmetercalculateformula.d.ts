import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class VirtualMeterCalculateFormula {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Calculates a virtual meter from a formula.
     *             A meter is coded as ID("METERID")
     *
     * @remarks
     * Calculates a virtual meter from a formula.
     *
     *             A meter is coded as ID("METERID")
     *             Ariphmetical operators:
     *              ()  parentheses;
     *              +   plus (a + b);
     *              -  minus (a - b);
     *              *  multiplycation symbol (a * b);
     *              /  divide symbol (a / b);
     *             Example: (ID("63ac09cb-4e5f-4f3e-bd27-ad8c30bdfc0c") + ID("0209555e-9dc4-4e84-a166-a864488b4b12")) * 2
     */
    virtualMeterCalculateFormulaGet(req: operations.VirtualMeterCalculateFormulaGetRequest, config?: AxiosRequestConfig): Promise<operations.VirtualMeterCalculateFormulaGetResponse>;
}
