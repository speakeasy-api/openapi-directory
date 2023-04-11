import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateUserPartialRequest extends SpeakeasyBase {
    /**
     * User ID to update
     */
    id: string;
    set: Record<string, any>;
    unset: string[];
}
