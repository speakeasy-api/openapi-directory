import { SpeakeasyBase } from "../../../internal/utils";
import { Repository } from "./repository";
/**
 * Starred Repository
 */
export declare class StarredRepository extends SpeakeasyBase {
    /**
     * A git repository
     */
    repo: Repository;
    starredAt: Date;
}
