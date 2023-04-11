import { SpeakeasyBase } from "../../../internal/utils";
export declare class Config extends SpeakeasyBase {
    /**
     * Timestamp for when the config was updated
     */
    createdAt: string;
    /**
     * A unique name to identify the configuration payload
     */
    name: string;
    /**
     * A serialised payload of up to `4096` characters
     */
    payload: string;
    /**
     * Timestamp for when the config was created
     */
    updatedAt: string;
}
