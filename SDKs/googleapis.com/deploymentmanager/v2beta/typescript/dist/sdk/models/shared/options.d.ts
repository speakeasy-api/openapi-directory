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
     * Options for how to validate and process properties on a resource.
     */
    validationOptions?: ValidationOptions;
    /**
     * Additional properties block described as a jsonSchema, these properties will never be part of the json payload, but they can be consumed by InputMappings, this must be a valid json schema draft-04. The properties specified here will be decouple in a different section. This schema will be merged to the schema validation, and properties here will be extracted From the payload and consumed explicitly by InputMappings. ex: field1: type: string field2: type: number
     */
    virtualProperties?: string;
}
