import { SpeakeasyBase } from "../../../internal/utils";
import { AptRepository } from "./aptrepository";
import { GooRepository } from "./goorepository";
import { YumRepository } from "./yumrepository";
import { ZypperRepository } from "./zypperrepository";
/**
 * A package repository.
 */
export declare class PackageRepository extends SpeakeasyBase {
    /**
     * Represents a single Apt package repository. This repository is added to a repo file that is stored at `/etc/apt/sources.list.d/google_osconfig.list`.
     */
    apt?: AptRepository;
    /**
     * Represents a Goo package repository. These is added to a repo file that is stored at C:/ProgramData/GooGet/repos/google_osconfig.repo.
     */
    goo?: GooRepository;
    /**
     * Represents a single Yum package repository. This repository is added to a repo file that is stored at `/etc/yum.repos.d/google_osconfig.repo`.
     */
    yum?: YumRepository;
    /**
     * Represents a single Zypper package repository. This repository is added to a repo file that is stored at `/etc/zypp/repos.d/google_osconfig.repo`.
     */
    zypper?: ZypperRepository;
}
