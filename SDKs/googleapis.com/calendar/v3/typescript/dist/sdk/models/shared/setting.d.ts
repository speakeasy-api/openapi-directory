import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class Setting extends SpeakeasyBase {
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * The id of the user setting.
     */
    id?: string;
    /**
     * Type of the resource ("calendar#setting").
     */
    kind?: string;
    /**
     * Value of the user setting. The format of the value depends on the ID of the setting. It must always be a UTF-8 string of length up to 1024 characters.
     */
    value?: string;
}
