import { SpeakeasyBase } from "../../../internal/utils";
export declare class ErrorField extends SpeakeasyBase {
    /**
     * Short identifier for the error, suitable for indicating the specific error within client code
     */
    code: string;
    /**
     * Description of the problem with the contents of the field
     */
    message?: string;
    /**
     * JSONPath referring to the field within the submitted data containing an error
     */
    path: string;
}
