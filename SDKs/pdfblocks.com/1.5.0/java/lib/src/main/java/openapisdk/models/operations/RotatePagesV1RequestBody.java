package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RotatePagesV1RequestBody {
    @SpeakeasyMetadata("multipartForm:name=angle")
    public Integer angle;
    public RotatePagesV1RequestBody withAngle(Integer angle) {
        this.angle = angle;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:file")
    public RotatePagesV1RequestBodyFile file;
    public RotatePagesV1RequestBody withFile(RotatePagesV1RequestBodyFile file) {
        this.file = file;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=first_page")
    public Integer firstPage;
    public RotatePagesV1RequestBody withFirstPage(Integer firstPage) {
        this.firstPage = firstPage;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=last_page")
    public Integer lastPage;
    public RotatePagesV1RequestBody withLastPage(Integer lastPage) {
        this.lastPage = lastPage;
        return this;
    }
}