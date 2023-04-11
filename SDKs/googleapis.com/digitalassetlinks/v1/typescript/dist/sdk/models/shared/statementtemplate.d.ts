import { SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";
/**
 * A single statement to check in a bulk call using BulkCheck. See CheckRequest for details about each field.
 */
export declare class StatementTemplate extends SpeakeasyBase {
    /**
     * The relationship being asserted between the source and target. If omitted, you must specify a BulkCheckRequest.default_relation value to use here.
     */
    relation?: string;
    /**
     * Uniquely identifies an asset. A digital asset is an identifiable and addressable online entity that typically provides some service or content. Examples of assets are websites, Android apps, Twitter feeds, and Plus Pages.
     */
    source?: Asset;
    /**
     * Uniquely identifies an asset. A digital asset is an identifiable and addressable online entity that typically provides some service or content. Examples of assets are websites, Android apps, Twitter feeds, and Plus Pages.
     */
    target?: Asset;
}
