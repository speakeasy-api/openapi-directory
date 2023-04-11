import { SpeakeasyBase } from "../../../internal/utils";
export declare class ErrorField extends SpeakeasyBase {
    /**
     * Short identifier for the error, suitable for indicating the specific error within client code
     */
    code: string;
    /**
     * Human-readable, English description of the problem with the contents of the field
     */
    message?: string;
    /**
     * <ul>
     *
     * @remarks
     * <li style='margin-left: 12px;'>JSONPath referring to a field containing an error</li>
     * <strong style='margin-left: 12px;'>OR</strong>
     * <li style='margin-left: 12px;'>JSONPath referring to a field that refers to an object containing an error, with more detail in `pathRelated`</li>
     * </ul>
     */
    path: string;
    /**
     * JSONPath referring to a field containing an error, which is referenced by `path`
     */
    pathRelated?: string;
}
