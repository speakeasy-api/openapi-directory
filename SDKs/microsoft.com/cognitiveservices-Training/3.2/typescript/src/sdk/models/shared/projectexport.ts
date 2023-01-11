import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProjectExport
/** 
 * Represents information about a project export.
**/
export class ProjectExport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=estimatedImportTimeInMS" })
  estimatedImportTimeInMS?: number;

  @SpeakeasyMetadata({ data: "json, name=imageCount" })
  imageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=iterationCount" })
  iterationCount?: number;

  @SpeakeasyMetadata({ data: "json, name=regionCount" })
  regionCount?: number;

  @SpeakeasyMetadata({ data: "json, name=tagCount" })
  tagCount?: number;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}
