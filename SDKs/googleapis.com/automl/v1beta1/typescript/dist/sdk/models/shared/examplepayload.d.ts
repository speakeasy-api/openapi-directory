import { SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";
import { Image } from "./image";
import { Row } from "./row";
import { TextSnippet } from "./textsnippet";
/**
 * Example data used for training or prediction.
 */
export declare class ExamplePayload extends SpeakeasyBase {
    /**
     * A structured text document e.g. a PDF.
     */
    document?: Document;
    /**
     * A representation of an image. Only images up to 30MB in size are supported.
     */
    image?: Image;
    /**
     * A representation of a row in a relational table.
     */
    row?: Row;
    /**
     * A representation of a text snippet.
     */
    textSnippet?: TextSnippet;
}
