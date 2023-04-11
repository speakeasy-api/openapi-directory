import { SpeakeasyBase } from "../../../internal/utils";
import { PackageSearchDTO } from "./packagesearchdto";
/**
 * The DefaultResponseDTO Class.
 *
 * @remarks
 * Contains fields of DefaultResponse DTO in application.
 *
 */
export declare class DefaultResponseDTOOfListOfPackageSearchDTO extends SpeakeasyBase {
    isError?: boolean;
    message?: string;
    responseException?: any;
    result?: PackageSearchDTO[];
}
