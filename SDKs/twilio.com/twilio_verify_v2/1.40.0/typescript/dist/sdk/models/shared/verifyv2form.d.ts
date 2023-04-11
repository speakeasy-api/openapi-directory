import { SpeakeasyBase } from "../../../internal/utils";
import { FormEnumFormTypesEnum } from "./formenumformtypesenum";
/**
 * OK
 */
export declare class VerifyV2Form extends SpeakeasyBase {
    /**
     * Additional information for the available forms for this type. E.g. The separator string used for `binding` in a Factor push.
     */
    formMeta?: any;
    formType?: FormEnumFormTypesEnum;
    /**
     * Object that contains the available forms for this type. This available forms are given in the standard [JSON Schema](https://json-schema.org/) format
     */
    forms?: any;
    /**
     * The URL to access the forms for this type.
     */
    url?: string;
}
