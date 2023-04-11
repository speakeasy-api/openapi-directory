import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Used to combine dimension values to a single dimension.
 */
export declare class ConcatenateExpression extends SpeakeasyBase {
    /**
     * The delimiter placed between dimension names. Delimiters are often single characters such as "|" or "," but can be longer strings. If a dimension value contains the delimiter, both will be present in response with no distinction. For example if dimension 1 value = "US,FR", dimension 2 value = "JP", and delimiter = ",", then the response will contain "US,FR,JP".
     */
    delimiter?: string;
    /**
     * Names of dimensions. The names must refer back to names in the dimensions field of the request.
     */
    dimensionNames?: string[];
}
