package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCertificateTemplatesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public PrivatecaProjectsLocationsCertificateTemplatesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}