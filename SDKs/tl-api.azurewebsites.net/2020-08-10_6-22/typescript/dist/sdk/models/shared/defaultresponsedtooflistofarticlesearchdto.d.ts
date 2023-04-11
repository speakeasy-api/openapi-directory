import { SpeakeasyBase } from "../../../internal/utils";
import { ArticleSearchDTO } from "./articlesearchdto";
/**
 * The DefaultResponseDTO Class.
 *
 * @remarks
 * Contains fields of DefaultResponse DTO in application.
 *
 */
export declare class DefaultResponseDTOOfListOfArticleSearchDTO extends SpeakeasyBase {
    isError?: boolean;
    message?: string;
    responseException?: any;
    result?: ArticleSearchDTO[];
}
