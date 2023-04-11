import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Prevent the specified UUID from hearing audio
 */
export declare enum UpdateCallRequestEarmuffActionEnum {
    Earmuff = "earmuff"
}
export declare class UpdateCallRequestEarmuff extends SpeakeasyBase {
    /**
     * Prevent the specified UUID from hearing audio
     */
    action?: UpdateCallRequestEarmuffActionEnum;
}
