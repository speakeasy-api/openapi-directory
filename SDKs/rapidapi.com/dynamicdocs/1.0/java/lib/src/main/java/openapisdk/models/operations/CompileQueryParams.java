package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doc-file-name")
    public String docFileName;
    public CompileQueryParams withDocFileName(String docFileName) {
        this.docFileName = docFileName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doc-url-expires-in")
    public Long docUrlExpiresIn;
    public CompileQueryParams withDocUrlExpiresIn(Long docUrlExpiresIn) {
        this.docUrlExpiresIn = docUrlExpiresIn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=latex-compiler")
    public CompileLatexCompilerEnum latexCompiler;
    public CompileQueryParams withLatexCompiler(CompileLatexCompilerEnum latexCompiler) {
        this.latexCompiler = latexCompiler;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=latex-runs ")
    public Long latexRuns;
    public CompileQueryParams withLatexRuns(Long latexRuns) {
        this.latexRuns = latexRuns;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=main-file-name")
    public String mainFileName;
    public CompileQueryParams withMainFileName(String mainFileName) {
        this.mainFileName = mainFileName;
        return this;
    }
}