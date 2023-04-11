import { SpeakeasyBase } from "../../../internal/utils";
import { OSPolicyResourceRepositoryResourceAptRepository } from "./ospolicyresourcerepositoryresourceaptrepository";
import { OSPolicyResourceRepositoryResourceGooRepository } from "./ospolicyresourcerepositoryresourcegoorepository";
import { OSPolicyResourceRepositoryResourceYumRepository } from "./ospolicyresourcerepositoryresourceyumrepository";
import { OSPolicyResourceRepositoryResourceZypperRepository } from "./ospolicyresourcerepositoryresourcezypperrepository";
/**
 * A resource that manages a package repository.
 */
export declare class OSPolicyResourceRepositoryResource extends SpeakeasyBase {
    /**
     * Represents a single apt package repository. These will be added to a repo file that will be managed at `/etc/apt/sources.list.d/google_osconfig.list`.
     */
    apt?: OSPolicyResourceRepositoryResourceAptRepository;
    /**
     * Represents a Goo package repository. These are added to a repo file that is managed at `C:/ProgramData/GooGet/repos/google_osconfig.repo`.
     */
    goo?: OSPolicyResourceRepositoryResourceGooRepository;
    /**
     * Represents a single yum package repository. These are added to a repo file that is managed at `/etc/yum.repos.d/google_osconfig.repo`.
     */
    yum?: OSPolicyResourceRepositoryResourceYumRepository;
    /**
     * Represents a single zypper package repository. These are added to a repo file that is managed at `/etc/zypp/repos.d/google_osconfig.repo`.
     */
    zypper?: OSPolicyResourceRepositoryResourceZypperRepository;
}
