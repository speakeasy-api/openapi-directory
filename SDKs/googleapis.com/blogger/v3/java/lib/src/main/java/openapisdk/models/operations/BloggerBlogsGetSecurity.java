package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BloggerBlogsGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public BloggerBlogsGetSecurityOption1 option1;
    public BloggerBlogsGetSecurity withOption1(BloggerBlogsGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public BloggerBlogsGetSecurityOption2 option2;
    public BloggerBlogsGetSecurity withOption2(BloggerBlogsGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}