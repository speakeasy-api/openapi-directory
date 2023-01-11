package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BloggerPagesListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public BloggerPagesListSecurityOption1 option1;
    public BloggerPagesListSecurity withOption1(BloggerPagesListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public BloggerPagesListSecurityOption2 option2;
    public BloggerPagesListSecurity withOption2(BloggerPagesListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}