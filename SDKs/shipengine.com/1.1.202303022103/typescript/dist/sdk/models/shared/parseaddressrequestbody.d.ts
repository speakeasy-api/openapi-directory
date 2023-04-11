import { SpeakeasyBase } from "../../../internal/utils";
import { PartialAddress } from "./partialaddress";
/**
 * The only required field is `text`, which is the text to be parsed. You can optionally also provide an `address` containing already-known values. For example, you may already know the recipient's name, city, and country, and only want to parse the street address into separate lines.
 *
 * @remarks
 *
 */
export declare class ParseAddressRequestBody extends SpeakeasyBase {
    /**
     * You can optionally provide any already-known address values. For example, you may already know the recipient's name, city, and country, and only want to parse the street address into separate lines.
     *
     * @remarks
     *
     */
    address?: PartialAddress;
    /**
     * The unstructured text that contains address-related entities
     */
    text: string;
}
