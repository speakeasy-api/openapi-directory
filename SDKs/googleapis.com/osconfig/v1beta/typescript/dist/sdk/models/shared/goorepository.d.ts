import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a Goo package repository. These is added to a repo file that is stored at C:/ProgramData/GooGet/repos/google_osconfig.repo.
 */
export declare class GooRepository extends SpeakeasyBase {
    /**
     * Required. The name of the repository.
     */
    name?: string;
    /**
     * Required. The url of the repository.
     */
    url?: string;
}
