import { SpeakeasyBase } from "../../../internal/utils";
import { AsyncOptions } from "./asyncoptions";
import { InputMapping } from "./inputmapping";
import { ValidationOptions } from "./validationoptions";
/**
 * Options allows customized resource handling by Deployment Manager.
 */
export declare class Options extends SpeakeasyBase {
    /**
     * Options regarding how to thread async requests.
     */
    asyncOptions?: AsyncOptions[];
    /**
     * The mappings that apply for requests.
     */
    inputMappings?: InputMapping[];
    /**
     * The json path to the field in the resource JSON body into which the resource name should be mapped. Leaving this empty indicates that there should be no mapping performed.
     */
    nameProperty?: string;
    /**
     * Options for how to validate and process properties on a resource.
     */
    validationOptions?: ValidationOptions;
}
